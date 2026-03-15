import * as React from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n/language-context";
const BADGES = [
 {
 id: "1",
 name: "Capitano del Levante",
 category: "explorer",
 description: "Completa un tour in barca",
 unlocked: true,
 color: "#1A4B8C",
 },
 {
 id: "2",
 name: "Pedalatore Seriale",
 category: "explorer",
 description: "Completa un tour in bici",
 unlocked: true,
 color: "#2ECC71",
 },
 {
 id: "3",
 name: "Orecchietta Master",
 category: "explorer",
 description: "Completa il corso di orecchiette",
 unlocked: false,
 color: "#F5C518",
 },
 {
 id: "4",
 name: "Storico Barese",
 category: "explorer",
 description: "Visita 3 monumenti storici",
 unlocked: true,
 color: "#FF6B6B",
 },
 {
 id: "5",
 name: "Esploratore Marino",
 category: "special",
 description: "Completa 5 esperienze di mare",
 unlocked: false,
 color: "#1A4B8C",
 },
 {
 id: "6",
 name: "Foodie Master",
 category: "special",
 description: "Completa 5 esperienze di cibo",
 unlocked: false,
 color: "#F5C518",
 },
 {
 id: "7",
 name: "Bari Master Hunter",
 category: "master",
 description: "Sblocca tutti i badge",
 unlocked: false,
 color: "#FFD700",
 },
];
const BADGE_CATEGORIES = [
 { id: "explorer", name: "Explorer" },
 { id: "special", name: "Special" },
 { id: "master", name: "Master" },
];
export default function BadgesScreen() {
 const { t } = useLanguage();
 const [selectedCategory, setSelectedCategory] = React.useState("explorer");
 const filteredBadges = BADGES.filter(
 (badge) => badge.category === selectedCategory
 );
 const unlockedCount = BADGES.filter((b) => b.unlocked).length;
 const totalCount = BADGES.length;
 return (
 <ScreenContainer className="bg-background">
 <ScrollView
 contentContainerStyle={{ flexGrow: 1 }}
 showsVerticalScrollIndicator={false}
 >
 <View className="gap-4 p-4">
 <View>
 <Text className="text-2xl font-bold text-foreground">
 {t("badges.title")}
 </Text>
 <Text className="text-sm text-muted mt-1">
 {t("badges.subtitle")}
 </Text>
 </View>
 <Card>
 <CardContent>
 <View className="gap-2">
 <View className="flex-row justify-between items-center">
 <Text className="text-sm font-semibold text-foreground">
 {t("profile.unlockedBadges")}
 </Text>
 <Text className="text-lg font-bold text-primary">
 {unlockedCount}/{totalCount}
 </Text>
 </View>
 <View className="h-2 bg-surface rounded-full overflow-hidden">
 <View
 className="h-full bg-success"
 style={{
 width: `${(unlockedCount / totalCount) * 100}%`,
 }}
 />
 </View>
 </View>
 </CardContent>
 </Card>
 <View className="flex-row gap-2">
 {BADGE_CATEGORIES.map((cat) => (
 <Badge
 key={cat.id}
 variant={selectedCategory === cat.id ? "success" : "default"}
 size="sm"
 onPress={() => setSelectedCategory(cat.id)}
 >
 {cat.name}
 </Badge>
 ))}
 </View>
 <View className="gap-3">
 {filteredBadges.map((badge) => (
 <Card
 key={badge.id}
 className={!badge.unlocked ? "opacity-50" : ""}
 >
 <CardContent>
 <View className="flex-row items-start gap-3">
 <View
 className="w-12 h-12 rounded-full items-center justify-cen
style={{
 backgroundColor: badge.color,
 }}
 >
 <Text className="text-xl">
 {badge.unlocked ? "✓" : "🔒"}
 </Text>
 </View>
 <View className="flex-1">
 <Text className="text-sm font-semibold text-foreground">
 {badge.name}
 </Text>
<Text className="text-xs text-muted mt-1">
 {badge.description}
 </Text>
<View className="mt-2">
 <Badge
 variant={badge.unlocked ? "success" : "default"}
 size="sm"
 >
 {badge.unlocked ? "Sbloccato" : "Bloccato"}
 </Badge>
 </View>
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
