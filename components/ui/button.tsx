import { Text, Pressable, type PressableProps } from "react-native";
import { cn } from "@/lib/utils";
interface ButtonProps extends PressableProps {
 children: string;
 variant?: "primary" | "secondary" | "outline";
}
export function Button({ children, variant = "primary", style, ...props }: Butto
 const variants = {
 primary: "bg-primary",
 secondary: "bg-secondary",
 outline: "border border-primary bg-transparent",
 };
 return (
 <Pressable
 style={({ pressed }) => [
 { opacity: pressed ? 0.7 : 1 },
 style,
 ]}
 {...props}
 >
 <View className={cn("px-6 py-3 rounded-lg items-center", variants[variant
 <Text className={cn(
 "font-semibold",
 variant === "outline" ? "text-primary" : "text-background"
 )}>
 {children}
 </Text>
 </View>
 </Pressable>
 );
}
