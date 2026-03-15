import { TextInput, type TextInputProps } from "react-native";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: TextInputProps) {
 return (
 <TextInput
 className={cn(
 "bg-surface border border-border rounded-lg px-4 py-3 text-foreground",
 className
 )}
 {...props}
 />
 );
}
