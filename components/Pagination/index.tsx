import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PaginationOptionsType } from "../../types";
import styles from "./styles";

type PaginationProps = {
  paginationOptions: PaginationOptionsType | null | undefined;
  onNext: () => void;
  onPrevious: () => void;
};

const Pagination: React.FC<PaginationProps> = ({
  paginationOptions,
  onNext,
  onPrevious,
}) => {
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);

  useEffect(() => {
    setHasPrevious(!!paginationOptions && paginationOptions.currentPage > 1);
    setHasNext(
      !!paginationOptions &&
        paginationOptions.currentPage < paginationOptions?.totalPages
    );
  }, [paginationOptions]);

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { opacity: hasPrevious ? 100 : 0 }]}
        onPress={onPrevious}
        disabled={!hasPrevious}
      >
        <MaterialIcons name="navigate-before" size={24} color="black" />
      </Pressable>

      <Text style={styles.pageLabel}>
        {paginationOptions?.currentPage} / {paginationOptions?.totalPages}
      </Text>

      <Pressable
        style={[styles.button, { opacity: hasNext ? 100 : 0 }]}
        onPress={onNext}
        disabled={!hasNext}
      >
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Pagination;
