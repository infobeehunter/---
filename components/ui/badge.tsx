import { View, Text, Pressable, type ViewProps } from "react-native";
import { cn } from "@/lib/utils";
export interface BadgeProps extends ViewProps {
 variant?: "default" | "success" | "warning" | "error" | "partner";
 size?: "sm" | "md" | "lg";
 onPress?: () => void;
}
export function Badge({
 children,
 className,
 variant = "default",
 size = "md",
 onPress,
 ...props
}: BadgeProps) {
 const variantClasses = {
 default: "bg-surface border border-border",
 success: "bg-success",
 warning: "bg-warning",
 error: "bg-error",
 partner: "bg-partner",
 };
 const sizeClasses = {
 sm: "px-2 py-1",
 md: "px-3 py-1.5",
 lg: "px-4 py-2",
 };
 const textSizeClasses = {
 sm: "text-xs",
 md: "text-sm",
 lg: "text-base",
 };
 const textColor = ["success", "warning", "error", "partner"].includes(variant
 ? "text-white"
 : "text-foreground";
 const content = (
 <View
 className={cn(
 "rounded-full items-center justify-center",
 variantClasses[variant],
 sizeClasses[size],
 className
 )}
 {...props}
 >
 <Text className={cn("font-semibold", textSizeClasses[size], textColor)}>
 {children}
 </Text>
 </View>
 );
 if (onPress) {
 return (
 <Pressable
 onPress={onPress}
 style={({ pressed }: { pressed: boolean }) => [{ opacity: pressed ? 0.7
 >
 {content}
 </Pressable>
 );
 }
 return content;
}
