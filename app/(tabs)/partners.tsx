import * as React from "react";
import { ScrollView, Text, View, FlatList, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/lib/i18n/language-context";
const PARTNERS = [
 {
 id: "1",
 name: "Ristorante Murat",
 category: "restaurants",
 discount: "10%",
 redeems: 45,
 rating: 4.8,
 color: "#FF6B6B",
 },
 {
 id: "2",
 name: "Caffè Levante",
 category: "bars",
 discount: "15%",
 redeems: 32,
 rating: 4.6,
 color: "#F5C518",
 },
 {
 id: "3",
 name: "Negozio Artigianale",
 category: "shops",
 discount: "20%",
 redeems: 18,
 rating: 4.9,
 color: "#2ECC71",
 },
 {
 id: "4",
 name: "Pizzeria Vecchia Bari",
 category: "restaurants",
 discount: "12%",
 redeems: 67,
 rating: 4.7,
 color: "#FF6B6B",
 },
 {
 id: "5",
 name: "Bar Centrale",
 category: "bars",
 discount: "10%",
 redeems: 28,
 rating: 4.5,
 color: "#F5C518",
 },
 {
 id: "6",
 name: "Boutique Locale",
 category: "shops",
 discount: "25%",
 redeems: 12,
 rating: 4.8,
 color: "#2ECC71",
 },
];
const CATEGORIES = [
 { id: "all", name: "Tutti" },
 { id: "restaurants", name: "Ristoranti" },
 { id: "bars", name: "Bar" },
 { id: "shops", name: "Negozi" },
 { id: "services", name: "Servizi" },
];
export default function PartnersScreen() {
 const { t } = useLanguage();
 const [selectedCategory, setSelectedCategory] = React.useState("all");
 const [searchText, setSearchText] = React.useState("");
 const filteredPartners = PARTNERS.filter((partner) => {
 const matchesCategory =
 selectedCategory === "all" || partner.category === selectedCategory;
 const matchesSearch = partner.name
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
 {t("partners.title")}
 </Text>
 <Text className="text-sm text-muted mt-1">
 {t("partners.subtitle")}
 </Text>
 </View>
 <Input
 placeholder={t("partners.searchPlaceholder")}
 value={searchText}
 onChangeText={setSearchText}
 className="mb-2"
 />
 <View>
 <Text className="text-sm font-semibold text-foreground mb-2">
 Categorie
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
 ? "bg-partner border-partner"
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
 {filteredPartners.length > 0 ? (
 <View className="gap-3">
 {filteredPartners.map((partner) => (
 <Card key={partner.id} onPress={() => {}}>
 <CardHeader>
 <View className="flex-row justify-between items-start">
 <View className="flex-1">
 <CardTitle>{partner.name}</CardTitle>
<Text className="text-xs text-muted mt-1">
 {partner.category}
 </Text>
 </View>
<Badge variant="partner" size="sm">
 {partner.discount}
 </Badge>
 </View>
 </CardHeader>
 <CardContent>
 <View className="flex-row justify-between items-center">
 <View className="flex-row items-center gap-1">
 <Text className="text-sm text-foreground">⭐</Text>
<Text className="text-sm font-semibold text-foreground">
 {partner.rating}
 </Text>
 </View>
<View className="flex-row items-center gap-1">
 <Text className="text-xs text-muted">
 {partner.redeems} riscatti
 </Text>
 </View>
 </View>
 </CardContent>
 </Card>
 ))}
 </View>
 ) : (
 <View className="flex-1 items-center justify-center py-8">
 <Text className="text-lg text-muted">
 {t("partners.noPartners")}
 </Text>
 </View>
 )}
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
