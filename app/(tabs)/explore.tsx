import React, { useState } from "react";
import { ScrollView, Text, View, TextInput } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";
import { useColors } from "@/hooks/use-colors";
const ALL_EXPERIENCES = [
 { id: 1, name: "Basilica di San Nicola", category: "history", rating: 4.8, poi
 { id: 2, name: "Cattedrale di Bari", category: "history", rating: 4.7, points
 { id: 3, name: "Lungomare Nazario Sauro", category: "nature", rating: 4.6, poi
 { id: 4, name: "Orecchiette Baresi", category: "food", rating: 4.9, points: 55
 { id: 5, name: "Muraglia Vecchia", category: "history", rating: 4.5, points: 3
 { id: 6, name: "Spiaggia di Pane e Pomodoro", category: "nature", rating: 4.7
];
export default function ExploreScreen() {
 const { t } = useLanguage();
 const colors = useColors();
 const [searchText, setSearchText] = useState("");
 const filteredExperiences = ALL_EXPERIENCES.filter((exp) =>
 exp.name.toLowerCase().includes(searchText.toLowerCase())
 );
 return (
 <ScreenContainer className="p-4">
 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 <View className="gap-4">
 <Text className="text-3xl font-bold text-foreground">{t("explore")}</T
 <TextInput
 placeholder={t("search")}
 value={searchText}
 onChangeText={setSearchText}
 className="bg-surface border border-border rounded-lg px-4 py-3 tex
 placeholderTextColor={colors.muted}
 />
 <View className="gap-3">
 {filteredExperiences.map((exp) => (
 <Card key={exp.id}>
 <View className="gap-2">
 <Text className="text-lg font-semibold text-foreground">{exp.n
 <View className="flex-row justify-between">
 <Text className="text-sm text-muted capitalize">{t(exp.categ
 <Text className="text-sm font-semibold text-primary">+{exp.p
 </View>
 <View className="flex-row items-center gap-1">
 <Text className="text-sm text-primary">⭐ {exp.rating}</Tex
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
