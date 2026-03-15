import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Language, translations } from "./translations";
interface LanguageContextType {
 language: Language;
 setLanguage: (lang: Language) => Promise<void>;
 t: (path: string) => string;
}
const LanguageContext = React.createContext<LanguageContextType | undefined>(
 undefined
);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
 const [language, setLanguageState] = React.useState<Language>("it");
 const [isLoading, setIsLoading] = React.useState(true);
 React.useEffect(() => {
 const loadLanguage = async () => {
 try {
 const saved = await AsyncStorage.getItem("app_language");
 if (saved === "it" || saved === "en") {
 setLanguageState(saved);
 }
 } catch (error) {
 console.error("Errore nel caricamento della lingua:", error);
 } finally {
 setIsLoading(false);
 }
 };
 loadLanguage();
 }, []);
 const setLanguage = async (lang: Language) => {
 try {
 await AsyncStorage.setItem("app_language", lang);
 setLanguageState(lang);
 } catch (error) {
 console.error("Errore nel salvataggio della lingua:", error);
 }
 };
 const t = (path: string): string => {
 const keys = path.split(".");
 let value: any = translations[language];
 for (const key of keys) {
 if (value && typeof value === "object" && key in value) {
 value = value[key];
 } else {
 return path;
 }
 }
 return typeof value === "string" ? value : path;
 };
 if (isLoading) {
 return null;
 }
 return (
 <LanguageContext.Provider value={{ language, setLanguage, t }}>
 {children}
 </LanguageContext.Provider>
 );
}
export function useLanguage() {
 const context = React.useContext(LanguageContext);
 if (context === undefined) {
 throw new Error(
 "useLanguage deve essere usato dentro a LanguageProvider"
 );
 }
 return context;
}
