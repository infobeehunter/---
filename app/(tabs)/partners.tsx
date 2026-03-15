import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";
const PARTNERS = [
 { id: 1, name: "Ristorante Da Pino", discount: "15%", category: "food" },
 { id: 2, name: "Pizzeria Bella Napoli", discount: "20%", category: "food" },
 { id: 3, name: "Hotel Bari Centro", discount: "10%", category: "accommodation
 { id: 4, name: "Museo Civico", discount: "Free entry", category: "culture" },
 { id: 5, name: "Spiaggia Club", discount: "25%", category: "beach" },
];
export default function PartnersScreen() {
 const { t } = useLanguage();
 return (
 <ScreenContainer className="p-4">
 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 <View className="gap-4">
 <Text className="text-3xl font-bold text-foreground">{t("partners")}</
 <Text className="text-base text-muted">{t("exclusive_discounts")}</Tex
 <View className="gap-3">
 {PARTNERS.map((partner) => (
 <Card key={partner.id}>
 <View className="gap-2">
 <View className="flex-row justify-between items-start">
 <View className="flex-1">
 <Text className="text-lg font-semibold text-foreground">{p
 <Text className="text-sm text-muted capitalize">{partner.c
 </View>
 <View className="bg-partner px-3 py-1 rounded-full">
 <Text className="text-sm font-bold text-background">{partn
 </View>
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
