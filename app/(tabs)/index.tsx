import React, { useState } from "react";
import { ScrollView, Text, View, Pressable, TextInput } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
import { useColors } from "@/hooks/use-colors";
const EXPERIENCES = [
 { id: 1, name: "Basilica di San Nicola", category: "history", rating: 4.8 },
 { id: 2, name: "Cattedrale di Bari", category: "history", rating: 4.7 },
 { id: 3, name: "Lungomare Nazario Sauro", category: "nature", rating: 4.6 },
 { id: 4, name: "Orecchiette Baresi", category: "food", rating: 4.9 },
];
export default function HomeScreen() {
 const { t } = useLanguage();
 const colors = useColors();
 const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
 const [searchText, setSearchText] = useState("");
 const filteredExperiences = EXPERIENCES.filter((exp) => {
 const matchesCategory = !selectedCategory || exp.category === selectedCatego
 const matchesSearch = exp.name.toLowerCase().includes(searchText.toLowerCase
 return matchesCategory && matchesSearch;
 });
 return (
 <ScreenContainer className="p-4">
 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 <View className="gap-6">
 {/* Header */}
 <View className="gap-2">
 <Text className="text-4xl font-bold text-foreground">🐝 BeeHunter</T
 <Text className="text-base text-muted">{t("discover_bari")}</Text>
 </View>
 {/* Search */}
 <TextInput
 placeholder={t("search")}
 value={searchText}
 onChangeText={setSearchText}
 className="bg-surface border border-border rounded-lg px-4 py-3 tex
 placeholderTextColor={colors.muted}
 />
 {/* Categories */}
 <View className="gap-2">
 <Text className="text-sm font-semibold text-muted">{t("categories")}
 <View className="flex-row gap-2 flex-wrap">
 {["history", "nature", "food"].map((cat) => (
 <Pressable
 key={cat}
 onPress={() => setSelectedCategory(selectedCategory === cat ?
 style={({ pressed }) => [
 {
 opacity: pressed ? 0.7 : 1,
 backgroundColor: selectedCategory === cat ? colors.primary
 },
 ]}
 className="px-4 py-2 rounded-full border border-border"
 >
 <Text
 className={`text-sm font-medium ${
 selectedCategory === cat ? "text-background" : "text-foreg
 }`}
 >
 {t(cat)}
 </Text>
 </Pressable>
 ))}
 </View>
 </View>
 {/* Experiences List */}
 <View className="gap-3">
 {filteredExperiences.map((exp) => (
 <Card key={exp.id}>
 <View className="gap-2">
 <Text className="text-lg font-semibold text-foreground">{exp.n
 <View className="flex-row justify-between items-center">
 <Text className="text-sm text-muted capitalize">{t(exp.categ
 <Text className="text-sm font-semibold text-primary">⭐ {ex
 </View>
 </View>
 </Card>
 ))}
 </View>
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
