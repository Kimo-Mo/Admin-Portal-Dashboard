import { theme, type ThemeConfig } from 'antd';
import { MAIN_COLORS } from './COLORS';

const MAIN_THEME_TOKEN: ThemeConfig['token'] = {
  borderRadius: 8,
  borderRadiusLG: 8,
  borderRadiusOuter: 8,
  fontFamily: 'var(--antd-font)',
  fontSize: 14,
  fontSizeXL: 16,
  controlHeight: 34,
  controlHeightLG: 48,
  borderRadiusXS: 0,
};

export const ANTD_THEME: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: MAIN_COLORS.light.primary,
    colorBgBase: MAIN_COLORS.light.background,
    colorTextBase: MAIN_COLORS.light.text + 'b6',
    colorBorder: MAIN_COLORS.light.border,
    colorBgElevated: MAIN_COLORS.light.elevated,
    colorBgContainer: MAIN_COLORS.light.card,
    ...MAIN_THEME_TOKEN,
  },
  components: {
    Layout: {
      bodyBg: 'transparent',
      headerBg: 'transparent',
      siderBg: 'transparent',
    },
    Segmented: {
      trackBg: MAIN_COLORS.light.card,
    },
    Menu: {
      itemHeight: 36,
      itemMarginBlock: 12,
      iconSize: 24,
      collapsedIconSize: 24,
      itemMarginInline: 0,
      itemPaddingInline: 12,
      iconMarginInlineEnd: 10,
      borderRadiusLG: 8,
    },
    Breadcrumb: {
      iconFontSize: 16,
      separatorMargin: 6,
    },
    Button: {
      iconGap: 4,
      paddingInlineLG: 16,
      contentFontSizeLG: 14,
      borderRadiusLG: 12,
    },
    Input: {
      inputFontSizeLG: 16,
      paddingBlockLG: 12,
      paddingInlineLG: 12,
      borderRadiusLG: 8,
    },
  },
};
export const ANTD_THEME_DARK: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: MAIN_COLORS.dark.primary,
    colorBgBase: MAIN_COLORS.dark.background,
    colorTextBase: MAIN_COLORS.dark.text + 'b6',
    colorBorder: MAIN_COLORS.dark.border,
    colorBgElevated: MAIN_COLORS.dark.elevated,
    colorBgContainer: MAIN_COLORS.dark.card,
    ...MAIN_THEME_TOKEN,
  },
  components: {
    Layout: {
      bodyBg: 'transparent',
      headerBg: 'transparent',
      siderBg: 'transparent',
    },
    Segmented: {
      trackBg: MAIN_COLORS.dark.card,
    },
    Menu: {
      itemHeight: 36,
      itemMarginBlock: 12,
      iconSize: 24,
      collapsedIconSize: 24,
      itemMarginInline: 0,
      itemPaddingInline: 12,
      iconMarginInlineEnd: 10,
      borderRadiusLG: 8,
    },
    Breadcrumb: {
      iconFontSize: 16,
      separatorMargin: 6,
    },
    Button: {
      iconGap: 4,
      paddingInlineLG: 16,
      contentFontSizeLG: 14,
      borderRadiusLG: 12,
    },
    Input: {
      inputFontSizeLG: 16,
      paddingBlockLG: 12,
      paddingInlineLG: 12,
      borderRadiusLG: 8,
    },
    Form: {
      itemMarginBottom: 16,
      verticalLabelPadding: '0 0 12px',
    },
    Modal: {
      contentBg: MAIN_COLORS.dark.card,
    },
    Pagination: {
      itemSize: 28,
    },
  },
};
