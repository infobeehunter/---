import { TextInput, View, Text, type TextInputProps } from "react-native";
import { cn } from "@/lib/utils";
import { useColors } from "@/hooks/use-colors";
export interface InputProps extends TextInputProps {
 label?: string;
 error?: string;
}
export function Input({
 label,
 error,
 className,
 placeholderTextColor,
 ...props
}: InputProps) {
 const colors = useColors();
 return (
 <View className="gap-1">
 <TextInput
 className={cn(
 "bg-surface border border-border rounded-lg px-4 py-3",
 "text-foreground",
 error && "border-error",
 className
 )}
 placeholderTextColor={placeholderTextColor || colors.muted}
 {...props}
 />
 {error && (
 <Text className="text-sm text-error">{error}</Text>
 )}
 </View>
 );
}
