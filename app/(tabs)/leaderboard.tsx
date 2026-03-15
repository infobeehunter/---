import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";
const LEADERBOARD = [
 { rank: 1, name: "Marco Rossi", points: 2500, level: 15 },
 { rank: 2, name: "Giulia Bianchi", points: 2350, level: 14 },
 { rank: 3, name: "Antonio Verdi", points: 2200, level: 13 },
 { rank: 4, name: "Sofia Gallo", points: 2100, level: 12 },
 { rank: 5, name: "Luca Ferrari", points: 1950, level: 11 },
];
export default function LeaderboardScreen() {
 const { t } = useLanguage();
 return (
 <ScreenContainer className="p-4">
 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 <View className="gap-4">
 <Text className="text-3xl font-bold text-foreground">{t("leaderboard"
 <View className="gap-2">
 {LEADERBOARD.map((user) => (
 <Card key={user.rank}>
 <View className="flex-row justify-between items-center">
 <View className="flex-row items-center gap-3 flex-1">
 <View className="w-8 h-8 rounded-full bg-primary items-cente
 <Text className="font-bold text-background">{user.rank}</T
 </View>
 <View className="flex-1">
 <Text className="font-semibold text-foreground">{user.name
 <Text className="text-xs text-muted">Level {user.level}</T
 </View>
 </View>
 <Text className="font-bold text-primary">{user.points} pts</Te
 </View>
 </Card>
 ))}
 </View>
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
