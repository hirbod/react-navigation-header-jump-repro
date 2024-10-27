import { Stack } from 'expo-router'

export default function NestedLayout() {

    return (
        <Stack
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: '!!!! jumping !!!!!',
                }}
            />
        </Stack>
    )
}
