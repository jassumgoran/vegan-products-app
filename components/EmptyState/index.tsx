import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type EmptyStateProps = {
  title: string;
  description: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default EmptyState;
