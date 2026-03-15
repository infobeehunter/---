import { Text, Pressable, type PressableProps } from "react-native";
import { cn } from "@/lib/utils";
interface BadgeProps extends PressableProps {
 children: string;
 variant?: "primary" | "secondary" | "outline";
}
export function Badge({ children, variant = "primary", style, ...props }: BadgeP
 const variants = {
 primary: "bg-primary",
 secondary: "bg-secondary",
 outline: "border border-border bg-transparent",
 };
 return (
 <Pressable
 style={({ pressed }) => [
 { opacity: pressed ? 0.7 : 1 },
 style,
 ]}
 {...props}
 >
 <View className={cn("px-3 py-1 rounded-full", variants[variant])}>
 <Text className={cn(
 "text-sm font-semibold",
 variant === "outline" ? "text-foreground" : "text-background"
 )}>
 {children}
 </Text>
 </View>
 </Pressable>
 );
}
