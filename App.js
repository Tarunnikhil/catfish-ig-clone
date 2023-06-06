import { View, Text } from "react-native";
import { SignedInStack, SignedOutStack } from "./screens/navigation";
import AuthNavigation from "./AuthNavigation";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <AuthNavigation />;
}
