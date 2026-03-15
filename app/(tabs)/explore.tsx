import * as React from "react";
import { ScrollView, Text, View, FlatList, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
 {
 id: "5",
 name: "Gita a Polignano",
 category: "sea",
 points: 55,
 badge: "Esploratore Marino",
 color: "#1A4B8C",
 },
 {
 id: "6",
 name: "Street Food Tour",
 category: "food",
 points: 45,
 badge: "Foodie Master",
 color: "#F5C518",
 },
];
const CATEGORIES = [
 { id: "all", name: "Tutti" },
 { id: "sea", name: "Mare" },
 { id: "bike", name: "Bici" },
 { id: "food", name: "Cibo" },
 { id: "culture", name: "Cultura" },
];
export default function ExploreScreen() {
 const { t } = useLanguage();
 const [selectedCategory, setSelectedCategory] = React.useState("all");
 const [searchText, setSearchText] = React.useState("");
 const filteredExperiences = EXPERIENCES.filter((exp) => {
 const matchesCategory =
 selectedCategory === "all" || exp.category === selectedCategory;
 const matchesSearch = exp.name
 .toLowerCase()
 .includes(searchText.toLowerCase());
 return matchesCategory && matchesSearch;
 });
 return (
 <ScreenContainer className="bg-background">
 <ScrollView
 contentContainerStyle={{ flexGrow: 1 }}
 showsVerticalScrollIndicator={false}
 >
 <View className="gap-4 p-4">
 <View>
 <Text className="text-2xl font-bold text-foreground">
 {t("explore.title")}
 </Text>
 <Text className="text-sm text-muted mt-1">
 {t("explore.subtitle")}
 </Text>
 </View>
 <Input
 placeholder={t("explore.searchPlaceholder")}
 value={searchText}
 onChangeText={setSearchText}
 className="mb-2"
 />
 <View>
 <Text className="text-sm font-semibold text-foreground mb-2">
 {t("explore.categories")}
 </Text>
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
 className={`mr-2 px-4 py-2 rounded-full border-2 ${
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
 {item.name}
 </Text>
 </View>
 </Pressable>
 )}
 contentContainerStyle={{ gap: 4 }}
 />
 </View>
 {filteredExperiences.length > 0 ? (
 <View className="gap-3">
 {filteredExperiences.map((exp) => (
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
 ) : (
 <View className="flex-1 items-center justify-center py-8">
 <Text className="text-lg text-muted">
 {t("explore.noResults")}
 </Text>
 </View>
 )}
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
