import { Pressable, Text, type ViewProps } from "react-native";
import { cn } from "@/lib/utils";
import * as Haptics from "expo-haptics";
import { Platform } from "react-native";
export interface ButtonProps extends ViewProps {
 onPress?: () => void;
 disabled?: boolean;
 variant?: "primary" | "secondary" | "outline" | "ghost";
 size?: "sm" | "md" | "lg";
 children: React.ReactNode;
}
export function Button({
 onPress,
 disabled,
 variant = "primary",
 size = "md",
 children,
 className,
 ...props
}: ButtonProps) {
 const variantClasses = {
 primary: "bg-primary",
 secondary: "bg-secondary",
 outline: "border-2 border-primary",
 ghost: "bg-transparent",
 };
 const sizeClasses = {
 sm: "px-3 py-2",
 md: "px-4 py-3",
 lg: "px-6 py-4",
 };
 const textSizeClasses = {
 sm: "text-sm",
 md: "text-base",
 lg: "text-lg",
 };
 const textColor = {
 primary: "text-white",
 secondary: "text-white",
 outline: "text-primary",
 ghost: "text-primary",
 };
 const handlePress = () => {
 if (!disabled) {
 if (Platform.OS !== "web") {
 Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
 }
 onPress?.();
 }
 };
 return (
 <Pressable
 onPress={handlePress}
 disabled={disabled}
 style={({ pressed }) => [
 {
 opacity: pressed && !disabled ? 0.8 : 1,
 transform: [{ scale: pressed && !disabled ? 0.97 : 1 }],
 },
 ]}
 {...props}
 >
 <Text
 className={cn(
 "rounded-lg font-semibold text-center",
 variantClasses[variant],
 sizeClasses[size],
 textSizeClasses[size],
 textColor[variant],
 disabled && "opacity-50",
 className
 )}
 >
 {children}
 </Text>
 </Pressable>
 );
}
