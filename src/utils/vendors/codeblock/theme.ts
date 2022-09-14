import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import { default as tailwindConfig} from '@my-project/outside-dist';

const fullConfig = resolveConfig(tailwindConfig)

const mainTextColor = (fullConfig.theme?.['colors'] as any)?.emerald['500'];

export default {
    lineNumberColor: `#333333`,
    lineNumberBgColor: `white`,
    backgroundColor: `transparent`,
    textColor: `#333333`,
    substringColor: `#333333`,
    keywordColor: `#a71d5d`,
    attributeColor: `#0086b3`,
    selectorAttributeColor: `#a71d5d`,
    docTagColor: `#333333`,
    nameColor: `#63a35c`,
    builtInColor: `#333333`,
    literalColor: `#0086b3`,
    bulletColor: `#0086b3`,
    codeColor: `#333333`,
    additionColor: `#55a532`,
    regexpColor: `#333333`,
    symbolColor: `#0086b3`,
    variableColor: mainTextColor,
    templateVariableColor: mainTextColor,
    linkColor: `#0366d6`,
    selectorClassColor: `#795da3`,
    typeColor: `#a71d5d`,
    stringColor: mainTextColor,
    selectorIdColor: `#795da3`,
    quoteColor: mainTextColor,
    templateTagColor: `#333333`,
    deletionColor: `#bd2c00`,
    titleColor: `#795da3`,
    sectionColor: `#63a35c`,
    commentColor: `#969896`,
    metaKeywordColor: `#333333`,
    metaColor: `#969896`,
    functionColor: `#333333`,
    numberColor: `#333333`,
  }
  