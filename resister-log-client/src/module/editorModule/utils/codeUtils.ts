import { CODE_LANGUAGE_FRIENDLY_NAME_MAP } from "@lexical/code";
import { CUSTOM_LANGUAGE } from "@/module/editorModule/constants/language";

export const getLexicalBuiltInCodeLanguageOptions = (): [string, string][] => {
  const options: [string, string][] = [];

  for (const [lang, friendlyName] of Object.entries(
    CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  )) {
    options.push([lang, friendlyName]);
  }

  console.log(CODE_LANGUAGE_FRIENDLY_NAME_MAP)

  return options;
}

  
export const getCustomCodeLanguageOptions = () => {
  const options: [string, string][] = [];

  for (const [lang, friendlyName] of Object.entries(
    CUSTOM_LANGUAGE,
  )) {
    options.push([lang, friendlyName]);
  }

  return options;}