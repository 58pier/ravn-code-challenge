import { createTheme } from "@mui/material";
import * as Constants from '../constants';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        h2_low_emphasis: React.CSSProperties;
        h2_high_emphasis: React.CSSProperties;
        body_low_emphasis: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        h2_low_emphasis?: React.CSSProperties;
        h2_high_emphasis?: React.CSSProperties;
        body_low_emphasis?: React.CSSProperties;
    }
}

    // Update the Typography's variant prop options
    declare module '@mui/material/Typography' {
        interface TypographyPropsVariantOverrides {
        h2_low_emphasis: true;
        h2_high_emphasis: true;
        body_low_emphasis: true
        }
    }

export const theme = createTheme({
    typography: {
        fontFamily: [
            'SF Pro Display',
        ].join(','),
        allVariants: {
            color: Constants.DEFAULT_COLOR_TEXT,
        },
        h2: {
            fontSize: Constants.DEFAULT_FONT_SIZE_H2,
            fontWeight: Constants.DEFAULT_FONT_WEIGHT_H2,
        },
        h2_low_emphasis: {
            fontSize: Constants.DEFAULT_FONT_SIZE_H2,
            color: Constants.DEFAULT_COLOR_TEXT_LOW_EMPHASIS,
            fontWeight: Constants.DEFAULT_FONT_WEIGHT_H2,
        },
        h2_high_emphasis: {
            fontSize: Constants.DEFAULT_FONT_SIZE_H2,
            color: Constants.DEFAULT_COLOR_TEXT_HIGH_EMPHASIS,
            fontWeight: Constants.DEFAULT_FONT_WEIGHT_H2,
        },
        body1: {
            fontSize: Constants.DEFAULT_FONT_SIZE_BODY,
            fontWeight: Constants.DEFAULT_FONT_WEIGHT_BODY,
        },
        body_low_emphasis: {
            fontSize: Constants.DEFAULT_FONT_SIZE_BODY,
            color: Constants.DEFAULT_COLOR_TEXT_LOW_EMPHASIS,
            fontWeight: Constants.DEFAULT_FONT_WEIGHT_BODY,
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h2_low_emphasis: 'h2',
                    h2_high_emphasis: 'h2',
                    body_low_emphasis: 'body',
                }
            },
            styleOverrides: {
                root: {
                    fontFamily: Constants.DEFAULT_FONT_FAMILY,
                },
            }
        }
    },
    palette: {
        primary: {
            main: Constants.DEFAULT_COLOR,
            contrastText: '#F2F2F2',
        }
    }
});
