import * as React from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/language-context";
const LEADERBOARD = [
 {
 id: "1",
 position: 1,
 name: "Marco Rossi",
 points: 2450,
 badge: "Bari Master Hunter",
 isCurrentUser: false,
 },
 {
 id: "2",
 position: 2,
 name: "Giulia Bianchi",
 points: 2180,
 badge: "Expert Hunter",
 isCurrentUser: false,
 },
 {
 id: "3",
 position: 3,
 name: "Tu",
 points: 1850,
 badge: "Expert Hunter",
 isCurrentUser: true,
 },
 {
 id: "4",
 position: 4,
 name: "Antonio Verdi",
 points: 1620,
 badge: "Novice Hunter",
 isCurrentUser: false,
 },
 {
 id: "5",
 position: 5,
 name: "Sofia Russo",
 points: 1450,
 badge: "Novice Hunter",
 isCurrentUser: false,
 },
 {
 id: "6",
 position: 6,
 name: "Luca Ferrari",
 points: 1280,
 badge: "Novice Hunter",
 isCurrentUser: false,
 },
 {
 id: "7",
 position: 7,
 name: "Elena Gallo",
 points: 1050,
 badge: "Novice Hunter",
 isCurrentUser: false,
 },
 {
 id: "8",
 position: 8,
 name: "Francesco Costa",
 points: 890,
 badge: "Novice Hunter",
 isCurrentUser: false,
 },
 {
 id: "9",
 position: 9,
 name: "Martina Rizzo",
 points: 720,
 badge: "Novice Hunter",
 isCurrentUser: false,
 },
 {
 id: "10",
 position: 10,
 name: "Roberto Moretti",
 points: 580,
 badge: "Novice Hunter",
 isCurrentUser: false,
 },
];
const getMedalEmoji = (position: number) => {
 switch (position) {
 case 1:
 return "🥇";
 case 2:
 return "🥈";
 case 3:
 return "🥉";
 default:
 return `#${position}`;
 }
};
export default function LeaderboardScreen() {
 const { t } = useLanguage();
 const currentUser = LEADERBOARD.find((user) => user.isCurrentUser);
 return (
 <ScreenContainer className="bg-background">
 <ScrollView
 contentContainerStyle={{ flexGrow: 1 }}
 showsVerticalScrollIndicator={false}
 >
 <View className="gap-4 p-4">
 <View>
 <Text className="text-2xl font-bold text-foreground">
 {t("leaderboard.title")}
 </Text>
 <Text className="text-sm text-muted mt-1">
 {t("leaderboard.subtitle")}
 </Text>
 </View>
 {currentUser && (
 <Card className="bg-primary">
 <CardContent>
 <View className="flex-row items-center justify-between">
 <View className="flex-row items-center gap-3 flex-1">
 <View className="w-12 h-12 rounded-full bg-white items-cente
 <Text className="text-lg font-bold text-primary">
 {currentUser.position}
 </Text>
 </View>
 <View className="flex-1">
 <Text className="text-sm font-semibold text-white">
 {currentUser.name}
 </Text>
<Text className="text-xs text-white opacity-80">
 {currentUser.badge}
 </Text>
 </View>
 </View>
 <View className="items-end">
 <Text className="text-2xl font-bold text-white">
 {currentUser.points}
 </Text>
 <Text className="text-xs text-white opacity-80">
 Punti
 </Text>
 </View>
 </View>
 </CardContent>
 </Card>
 )}
 <View className="gap-2">
 <Text className="text-sm font-semibold text-foreground mb-2">
 Classifica
 </Text>
 {LEADERBOARD.map((user, index) => (
 <Card
 key={user.id}
 className={user.isCurrentUser ? "bg-primary opacity-30" : ""}
 >
 <CardContent>
 <View className="flex-row items-center justify-between">
 <View className="flex-row items-center gap-3 flex-1">
 <View
 className={`w-10 h-10 rounded-full items-center justify
 user.position <= 3
 ? "bg-warning"
 : "bg-surface border border-border"
 }`}
 >
 <Text
 className={`font-bold ${
 user.position <= 3
 ? "text-white"
 : "text-foreground"
 }`}
 >
 {getMedalEmoji(user.position)}
 </Text>
 </View>
<View className="flex-1">
 <Text className="text-sm font-semibold text-foreground">
 {user.name}
 </Text>
<Text className="text-xs text-muted">
 {user.badge}
 </Text>
 </View>
 </View>
 <View className="items-end">
 <Text className="text-lg font-bold text-primary">
 {user.points}
 </Text>
<Text className="text-xs text-muted">
 Punti
 </Text>
 </View>
 </View>
 </CardContent>
 </Card>
 ))}
 </View>
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
