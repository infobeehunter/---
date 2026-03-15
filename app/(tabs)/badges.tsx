import React from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { useLanguage } from "@/lib/i18n/language-context";
import { useColors } from "@/hooks/use-colors";
const BADGES = [
 { id: 1, name: "Explorer", emoji: "🗺️", description: "Visit 5 experiences" },
 { id: 2, name: "Foodie", emoji: "🍝", description: "Try 3 local restaurants"
 { id: 3, name: "History Buff", emoji: "📚", description: "Visit all historica
 { id: 4, name: "Nature Lover", emoji: "🌿", description: "Explore 5 natural p
 { id: 5, name: "Collector", emoji: "🎖️", description: "Collect 10 badges" },
 { id: 6, name: "Champion", emoji: "🏆", description: "Reach top of leaderboard
];
export default function BadgesScreen() {
 const { t } = useLanguage();
 const colors = useColors();
 return (
 <ScreenContainer className="p-4">
 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 <View className="gap-4">
 <Text className="text-3xl font-bold text-foreground">{t("badges")}</Te
 <View className="flex-row flex-wrap gap-3 justify-between">
 {BADGES.map((badge) => (
 <Pressable
 key={badge.id}
 style={({ pressed }) => [
 {
 opacity: pressed ? 0.7 : 1,
 width: "48%",
 },
 ]}
 >
 <View
 className="bg-surface border border-border rounded-lg p-4 item
 style={{ borderColor: colors.border }}
 >
 <Text className="text-4xl">{badge.emoji}</Text>
 <Text className="text-sm font-semibold text-foreground text-ce
 <Text className="text-xs text-muted text-center">{badge.descri
 </View>
 </Pressable>
 ))}
 </View>
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
