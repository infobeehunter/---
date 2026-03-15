import React, { useState } from "react";
import { ScrollView, Text, View, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/language-context";
import { useColors } from "@/hooks/use-colors";
export default function ProfileScreen() {
 const { t, language, setLanguage } = useLanguage();
 const colors = useColors();
 const [showLanguageMenu, setShowLanguageMenu] = useState(false);
 return (
 <ScreenContainer className="p-4">
 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 <View className="gap-6">
 {/* Profile Header */}
 <View className="items-center gap-3">
 <View className="w-20 h-20 rounded-full bg-primary items-center jus
 <Text className="text-4xl">👤</Text>
 </View>
 <View className="items-center">
 <Text className="text-2xl font-bold text-foreground">John Doe</Tex
 <Text className="text-sm text-muted">Level 12 • 1,850 pts</Text>
 </View>
 </View>
 {/* Stats */}
 <View className="flex-row gap-3">
 <Card className="flex-1">
 <View className="items-center gap-1">
 <Text className="text-2xl font-bold text-primary">12</Text>
 <Text className="text-xs text-muted text-center">{t("badges")}</
 </View>
 </Card>
 <Card className="flex-1">
 <View className="items-center gap-1">
 <Text className="text-2xl font-bold text-primary">24</Text>
 <Text className="text-xs text-muted text-center">{t("experiences
 </View>
 </Card>
 <Card className="flex-1">
 <View className="items-center gap-1">
 <Text className="text-2xl font-bold text-primary">8</Text>
 <Text className="text-xs text-muted text-center">{t("partners")}
 </View>
 </Card>
 </View>
 {/* Language Settings */}
 <Card>
 <View className="gap-3">
 <Text className="font-semibold text-foreground">{t("language")}</T
 <View className="flex-row gap-2">
 {["it", "en"].map((lang) => (
 <Pressable
 key={lang}
 onPress={() => setLanguage(lang as "it" | "en")}
 style={({ pressed }) => [
 {
 opacity: pressed ? 0.7 : 1,
 flex: 1,
 backgroundColor: language === lang ? colors.primary : co
 },
 ]}
 className="py-2 rounded-lg items-center border border-borde
 >
 <Text
 className={`font-semibold ${
 language === lang ? "text-background" : "text-foreground
 }`}
 >
 {lang.toUpperCase()}
 </Text>
 </Pressable>
 ))}
 </View>
 </View>
 </Card>
 {/* Settings */}
 <Card>
 <View className="gap-3">
 <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }
 <Text className="text-foreground font-semibold">{t("settings")}<
 </Pressable>
 <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }
 <Text className="text-foreground font-semibold">{t("about")}</Te
 </Pressable>
 <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }
 <Text className="text-error font-semibold">{t("logout")}</Text>
 </Pressable>
 </View>
 </Card>
 </View>
 </ScrollView>
 </ScreenContainer>
 );
}
