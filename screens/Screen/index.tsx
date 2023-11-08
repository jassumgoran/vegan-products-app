/**
 * Base screen that is a wrapper for all screens
 */

import React, { ReactNode } from "react";
import { View } from "react-native";
import styles from "./styles";

interface ScreenProps {
  children: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Screen;
