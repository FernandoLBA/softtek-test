/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#f8f9ff",
        black: {
          dark: "#03050F",
          medium: "#0A051E",
          normal: "#141938",
        },
        white: {
          dark: "#FFFFFF",
          medium: "#F8F9FF",
          light: "#EDEFFC",
        },
        gray: {
          dark: "#2B304E",
          medium: "#5E6488",
          light: "#CCD1EE",
          light2: "#7981B2",
          normal: "#A9AFD9",
          shadow: "#AEACF359",
        },
        red: {
          dark: "#FF1C44",
        },
        green: {
          dark: "#00F4E2",
          medium: "#00FF7F",
          light: "#389E0D",
          normal: "#7DF0BA"
        },
        purple: {
          dark: "#4F4FFF",
          light: "#D7DBF5",
        },
      },
    },
  },
  plugins: [],
};

/*
RIMAC COLOR PALLETTE

# >>>> region (general page) TERMINADO
background_white_color: #D9D9D9, <
#end region

# >>>> region (navbar) Terminado
phone_text, label_text: #03050F,<
#end region

# >>>> region (footer) Terminado
backgroud: #03050F,<
rimac_logo: #FFFFFF, <
label_text: #F8F9FF,<
divider: #2B304E,<
#end region

# >>>> region First page (HOME) Terminado
divider: #CCD1EE,<
tag_bg: #00F4E2, #00FF7F,<
button_black<, text <, link<, tag_text<: #03050F,<
button_text: #FFFFFF,<
checkboxes_black, checkboxes_label: #0A051E,<
checkbox_test: #FFFFFF,<
input_label: #5E6488,<
input_border: #5E6488, <

pink_gradient: #C333FF,<
green_gradient: #00F4E2,<
#end region

# >>>> region (stepper) Terminado
background: #EDEFFC, <

number_primary_bg: #4F4FFF,<
number_primary_text: #FFFFFF,<
primary_label: #141938,<

four_dots: #4F4FFF;<

number_disabled_border: #7981B2,<
number_disabled_text: #7981B2,<
disabled_label: #7981B2,<

return_icon: #4F4FFF,<
return_text: #4F4FFF,<
#end region

# >>>> region (plans)
top_title: #141938, <
title_label: #141938,<

cards_bg: #FFFFFF,<
cards_shaddow: #AEACF359,<
card_unchecked_radio: #A9AFD9,<
card_checked_radio: #389E0D,<
card_checked_radio_text: #FFFFFF,<
card_title: #141938,<
card_text: #141938,<
card_border: #03050F, <

plans_cards_bg: #FFFFFF,<
plans_cards_tag_bg: #7DF0BA,<
plans_cards_tag_text: #141938,<
plans_cards_shaddow: #AEACF359,<
plans_card_unchecked_radio: #A9AFD9,
plans_card_checked_radio: #389E0D,<
plans_card_checked_radio_text: #FFFFFF,<
plans_card_title: #141938,<
plans_card_price_label: #7981B2,<
plans_card_price: #141938,<
plans_card_divider: #D7DBF5,<
plans_card_text: #141938,<
plans_card_button_bg: #FF1C44,<
plans_card_button_text: #FFFFFF,<
#end region

# >>>> region (plans_slider_control)
disabled_circle_button: #A9AFD9, 
enabled_circle_button: #4F4FFF, 
label_text: #141938,
#end region

# >>>> region (resume)
title: #141938, 

resume_card_bg: #141938,
resume_card_shadow: #141938,
resume_card_top_label: #141938,
resume_card_top_title: #141938,
resume_card_top_title_icon: #141938,

resume_card_divider: #D7DBF5,
resume_card_text: #141938,
#end region
*/
