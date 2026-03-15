import * as React from "react";
import { ScrollView, Text, View, FlatList, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { useColors } from "@/hooks/use-colors";
import { useLanguage } from "@/lib/i18n/language-context";
const EXPERIENCES = [
 {
 id: "1",
 name: "Tour in Barca",
 category: "sea",
 points: 50,
 badge: "Capitano del Levante",
 color: "#1A4B8C",
 },
 {
 id: "2",
 name: "Tour in Bici",
 category: "bike",
 points: 40,
 badge: "Pedalatore Seriale",
 color: "#2ECC71",
 },
 {
 id: "3",
 name: "Corso Orecchiette",
 category: "food",
 points: 60,
 badge: "Orecchietta Master",
 color: "#F5C518",
 },
 {
 id: "4",
 name: "Basilica di San Nicola",
 category: "culture",
 points: 30,
 badge: "Storico Barese",
 color: "#FF6B6B",
 },
];
const CATEGORIES = [
 { id: "all", name: "Tutti", icon: "🎯" },
 { id: "sea", name: "Mare", icon: "🌊" },
 { id: "bike", name: "Bici", icon: "🚴" },
 { id: "food", name: "Cibo", icon: "🍽️" },
 { id: "culture", name: "Cultura", icon: "🏛️" },
];
export default function HomeScreen() {
 const colors = useColors();
 const { t } = useLanguage();
 const [selectedCategory, setSelectedCategory] = React.useState("all");
 const [userPoints, setUserPoints] = React.useState(150);
 return (
 <ScreenContainer className="bg-background">
 <View className="flex-row justify-between items-center px-4 py-3 bg-surfac
 <View>
 <Text className="text-sm text-muted">{t("home.totalPoints")}</Text>
 <Text className="text-2xl font-bold text-primary">{userPoints}</Text>
 </View>
 <View className="items-center">
 <Text className="text-lg font-bold text-foreground">BeeHunter</Text>
 <Badge variant="success" size="sm">
 {t("profile.noviceHunter")}
 </Badge>
 </View>
 </View>
 <ScrollView
 contentContainerStyle={{ flexGrow: 1 }}
 showsVerticalScrollIndicator={false}
 >
 <View className="gap-4 p-4">
 <View>
 <Text className="text-xl font-bold text-foreground">
 {t("home.discoverBari")}
 </Text>
 <Text className="text-sm text-muted mt-1">
 {t("home.completeChallenge")}
 </Text>
 </View>
 <FlatList
 data={CATEGORIES}
 horizontal
 showsHorizontalScrollIndicator={false}
 scrollEnabled={false}
 keyExtractor={(item) => item.id}
 renderItem={({ item }) => (
 <Pressable
 onPress={() => setSelectedCategory(item.id)}
 style={({ pressed }) => [
 {
 opacity: pressed ? 0.7 : 1,
 },
 ]}
 >
 <View
 className={`mr-3 px-4 py-2 rounded-full border-2 ${
 selectedCategory === item.id
 ? "bg-primary border-primary"
: "bg-surface border-border"
 }`}
 >
 <Text
 className={`text-sm font-semibold ${
 selectedCategory === item.id
 ? "text-white"
: "text-foreground"
 }`}
 >
 {item.icon} {item.name}
 </Text>
 </View>
 </Pressable>
 )}
 contentContainerStyle={{ gap: 8 }}
 />
 <View className="gap-3">
 <Text className="text-lg font-semibold text-foreground">
 {t("home.availableExperiences")}
 </Text>
 {EXPERIENCES.map((exp) => (
 <Card key={exp.id} onPress={() => {}}>
 <CardHeader>
 <View className="flex-row justify-between items-start">
 <View className="flex-1">
 <CardTitle>{exp.name}</CardTitle>
<Text className="text-xs text-muted mt-1">
 {exp.category}
 </Text>
 </View>
 <Badge variant="success" size="sm">
 +{exp.points}
 </Badge>
 </View>
 </CardHeader>
 <CardContent>
 <View className="flex-row items-center gap-2">
 <View
 className="w-8 h-8 rounded-full"
style={{ backgroundColor: exp.color }}
 />
 <Text className="text-sm text-foreground flex-1">
 {exp.badge}
 </Text>
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
