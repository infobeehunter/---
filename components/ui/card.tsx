import { View, Text, Pressable, type ViewProps } from "react-native";
import { cn } from "@/lib/utils";
export interface CardProps extends ViewProps {
 onPress?: () => void;
 disabled?: boolean;
}
export function Card({
 children,
 className,
 onPress,
 disabled,
 ...props
}: CardProps) {
 const content = (
 <View
 className={cn(
 "bg-surface rounded-xl p-4 border border-border",
 disabled && "opacity-50",
 className
 )}
 {...props}
 >
 {children}
 </View>
 );
 if (onPress) {
 return (
 <Pressable
 onPress={onPress}
 disabled={disabled}
 style={({ pressed }) => [
 { opacity: pressed && !disabled ? 0.7 : 1 },
 ]}
 >
 {content}
 </Pressable>
 );
 }
 return content;
}
export function CardHeader({ children, className }: ViewProps) {
 return (
 <View className={cn("mb-3", className)}>
 {children}
 </View>
 );
}
export function CardTitle({ children, className }: ViewProps) {
 return (
 <Text className={cn("text-lg font-semibold text-foreground", className)}>
 {children}
 </Text>
 );
}
export function CardContent({ children, className }: ViewProps) {
 return (
 <View className={cn("gap-2", className)}>
 {children}
 </View>
 );
}
export function CardFooter({ children, className }: ViewProps) {
 return (
 <View className={cn("mt-4 flex-row gap-2", className)}>
 {children}
 </View>
 );
}
