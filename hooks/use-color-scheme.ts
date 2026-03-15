import { useColorScheme as useNativeColorScheme } from "react-native";
import { useEffect, useState } from "react";
export function useColorScheme() {
 const nativeScheme = useNativeColorScheme();
 const [scheme, setScheme] = useState(nativeScheme);
 useEffect(() => {
 setScheme(nativeScheme);
 }, [nativeScheme]);
 return scheme;
}
