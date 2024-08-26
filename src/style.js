import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Roboto", sans-serif;
}

:root {
  --brown: #1B0D01;
  --brown-light: #311602;

  --primary: #1B0D01;
  --primary-light: #311602;
  --secondary: #0054da;
  --secondary-light: #337df3;
  --third: #5ABCD5;
  --blue: #3F6FE8;

  --gray01: #171416;
  --gray02: #252023;
  --gray03: #595356;
  --gray04: #7f7b7d;
  --gray05: #a8a5a6;
  --gray06: #F7F7FC;

  --white: #F7F7FC;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.heading56 {
  font-family: "Roboto";
  font-size: 56px;
  line-height: 70px;
  font-weight: 700;
}

.heading40 {
  font-family: "Roboto";
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
}

.heading32 {
  font-family: "Roboto";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
}

.heading24 {
  font-family: "Roboto";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
}

.heading18 {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.heading16 {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}

.body24 {
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
}

.body18 {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
}

.body16 {
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
}

.body16 {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}

.body14 {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}

.body12 {
  font-family: "Roboto";
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
}

.button16 {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  border: none;
  cursor: poRoboto;
}

.button14 {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  border: none;
  cursor: poRoboto;
}

.link16 {
  font-family: "Roboto";
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  border: none;
  cursor: poRoboto;
}

.link14 {
  font-family: "Roboto";
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  border: none;
  cursor: poRoboto;
}

.overline16 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.overline14 {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.label14 {
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
}

.label12 {
  font-family: "Roboto";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
}

button {
  background-color: transparent;
  border: none;
}

.brown_light {
  color: var(--brown-light);
}

.brown {
  color: var(--brown);
}

.gray {
  color: var(--gray01);
}

.gray2 {
  color: var(--gray02);
}

.gray3 {
  color: var(--gray03);
}

.gray4 {
  color: var(--gray04);
}

.gray5 {
  color: var(--gray05);
}

.gray6 {
  color: var(--gray06);
}

.primary {
  color: var(--primary);
}

.primary_light {
  color: var(--primary-light);
}

.secondary {
  color: var(--secondary);
}

.secondary_light {
  color: var(--secondary-light);
}

.third {
  color: var(--third);
}

.white {
  color: var(--white);
}

.light {
  color: #e9f9fc;
}

.blue {
  color: var(--blue);
}

.underline {
  text-decoration: underline;
}

.container {
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
}

.button_gray {
  border-radius: 4px;
  background: #CED4DA;
  color: var(--gray07);
}

.button_primary {
  background: var(--primary);
  color: var(--white);
}

.button_primary:hover {
  transform: scale(0.98);
}

.button_primary_light {
  background: var(--primary-light);
  color: var(--white);
}

.button_primary_light:hover {
  transform: scale(0.98);
}

.button_secundary {
  background-color: var(--secondary);
  color: var(--white);
}

.button_secundary:hover {
  transform: scale(0.98);
}

.button_transparent {
  background-color: transparent;
  color: var(--primary-light);
}

.button_transparent:hover {
  transform: scale(0.98);
}

.button_disable {
  opacity: 0.5;
  pointer-events: none;
}

.full_width {
  width: 100% !important;
}

.fit_width {
  width: fit-content !important;
}

.button {
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .heading56 {
    font-size: 40px;
    line-height: 52px;
    font-weight: 700;
  }

  .heading40 {
    font-size: 32px;
    line-height: 40px;
    font-weight: 700;
  }
}

.animação {
  transform: translateY(0px);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.font300 {
  font-weight: 300;
}

.font400 {
  font-weight: 400;
}

.font500 {
  font-weight: 500;
}

.font600 {
  font-weight: 600;
}

.font700 {
  font-weight: 700;
}

.font800 {
  font-weight: 800;
}

.font900 {
  font-weight: 900;
}

.margin4 {
  margin-bottom: 4px;
}

.margin8 {
  margin-bottom: 8px;
}

.margin12 {
  margin-bottom: 12px;
}

.margin16 {
  margin-bottom: 16px;
}

.margin20 {
  margin-bottom: 20px;
}

.margin24 {
  margin-bottom: 24px;
}

.margin32 {
  margin-bottom: 32px;
}

.ajust_gap4 {
  display: flex;
  align-items: center;
  gap: 4px;
}

.ajust_gap8 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ajust_gap12 {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ajust_gap16 {
  display: flex;
  align-items: center;
  gap: 16px;
}

.text_center {
  text-align: center;
}

.disable {
  display: none !important;
}

.highlighted {
  background-color: yellow !important; 
  display: inline;
}

.pointer {
  cursor: pointer;
}

.relative {
  position: relative;
}

.upper {
  text-transform: uppercase;
}


`;
