import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";

function Forgot() {
  return (
    <ThemedView className="flex-1 items-center justify-center p-6">
      <ThemedText type="title" className="text-center mb-6">
        Forgot your password?
      </ThemedText>
    </ThemedView>
  );
}

export default Forgot;
