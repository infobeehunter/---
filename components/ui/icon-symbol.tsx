import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ComponentProps } from "react";
import { OpaqueColorValue } from "react-native";
type IconMapping = Record<string, ComponentProps<typeof MaterialIcons>["name"]>
const MAPPING: IconMapping = {
 "house.fill": "home",
 "magnifyingglass": "search",
 "star.fill": "star",
 "medal.fill": "emoji_events",
 "chart.bar.fill": "bar_chart",
 "person.fill": "person",
 "chevron.right": "chevron_right",
 "paperplane.fill": "send",
};
export function IconSymbol({
 name,
 size = 24,
 color,
 style,
}: {
 name: keyof typeof MAPPING;
 size?: number;
 color: string | OpaqueColorValue;
 style?: any;
}) {
 return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={s
}
