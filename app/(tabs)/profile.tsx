import * as React from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
const PROFILE = {
 name: "Marco Rossi",
 level: "expertHunter",
 points: 1850,
 nextLevelPoints: 2500,
 completedExperiences: 12,
 exploredDistricts: 5,
 redeemedDiscounts: 8,
 unlockedBadges: 7,
};
const STAT_ITEMS = [
 {
 key: "completedExperiences",
 icon: "✓",
 label: "Esperienze Completate",
 },
 { key: "exploredDistricts", icon: "🗺️", label: "Quartieri Esplorati" },
 { key: "redeemedDiscounts", icon: "🎟️", label: "Sconti Riscattati" },
 { key: "unlockedBadges", icon: "🏆", label: "Badge Sbloccati" },
];
export default function ProfileScreen() {
 const { t, language, setLanguage } = useLanguage();
 const progressPercentage =
 (PROFILE.points / PROFILE.nextLevelPoints) * 100;
 return (
 <ScreenContainer className="bg-background">
 <ScrollView
 contentContainerStyle={{ flexGrow: 1 }}
 showsVerticalScrollIndicator={false}
 >
 <View className="gap-4 p-4">
 <Card className="bg-secondary">
 <CardContent>
 <View className="items-center gap-3">
 <View className="w-16 h-16 rounded-full bg-white items-center j
 <Text className="text-3xl">👤</Text>
 </View>
 <View className="items-center">
 <Text className="text-xl font-bold text-white">
 {PROFILE.name}
 </Text>
 <Badge variant="success" size="md" className="mt-2">
 {t(`profile.${PROFILE.level}`)}
 </Badge>
 </View>
 </View>
 </CardContent>
 </Card>
 <Card>
 <CardHeader>
 <CardTitle>{t("profile.totalPoints")}</CardTitle>
 </CardHeader>
 <CardContent>
 <View className="gap-3">
 <View className="flex-row justify-between items-center">
 <Text className="text-lg font-bold text-primary">
 {PROFILE.points}
 </Text>
 <Text className="text-sm text-muted">
 / {PROFILE.nextLevelPoints}
 </Text>
 </View>
 <View className="h-3 bg-surface rounded-full overflow-hidden">
 <View
 className="h-full bg-success"
 style={{
 width: `${progressPercentage}%`,
 }}
 />
 </View>
 <Text className="text-xs text-muted text-center">
 {Math.round(progressPercentage)}% completato
 </Text>
 </View>
 </CardContent>
 </Card>
 <View>
 <Text className="text-lg font-semibold text-foreground mb-3">
 Statistiche
 </Text>
 <View className="gap-2">
 {STAT_ITEMS.map((stat) => (
 <Card key={stat.key}>
 <CardContent>
 <View className="flex-row items-center justify-between">
 <View className="flex-row items-center gap-3">
 <Text className="text-2xl">{stat.icon}</Text>
 <Text className="text-sm font-semibold text-foreground">
 {stat.label}
 </Text>
 </View>
<Text className="text-lg font-bold text-primary">
 {PROFILE[stat.key as keyof typeof PROFILE]}
 </Text>
 </View>
 </CardContent>
 </Card>
 ))}
 </View>
 </View>
 <View>
 <Text className="text-lg font-semibold text-foreground mb-3">
 Impostazioni
 </Text>
 <Card>
 <CardContent>
 <View className="gap-3">
 <View className="flex-row items-center justify-between">
 <Text className="text-sm font-semibold text-foreground">
 Lingua
 </Text>
 <Text className="text-sm text-primary font-semibold">
 {language === "it" ? "Italiano" : "English"}
 </Text>
 </View>
 <View className="flex-row gap-2">
 <Button
 variant={language === "it" ? "primary" : "outline"}
 size="sm"
onPress={() => setLanguage("it")}
 className="flex-1"
 >
 Italiano
 </Button>
 <Button
 variant={language === "en" ? "primary" : "outline"}
 size="sm"
onPress={() => setLanguage("en")}
 className="flex-1"
 >
 English
 </Button>
 </View>
 </View>
 </CardContent>
 </Card>
 </View>
 <View className="gap-2">
 <Button variant="outline" size="lg">
 Condividi
 </Button>
 <Button variant="outline" size="lg">
 Feedback
 </Button>
 <Button variant="ghost" size="lg">
 Esci
 </Button>
 </View>
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
