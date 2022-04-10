import { ResultItem } from "./searchResultsTemplate"
import React from "react"
import { View, Text, TouchableOpacity, FlatList, ListRenderItem, Image } from "react-native"
import { styles } from "./styles"
import { styles as commonStyles } from "../../styles/styles"
import { length_factor } from "../../styles/styles"

const renderSeparator = () => {
    return <View style={styles.seperator}></View>
}

export const renderSearchItems = (
    results: ResultItem[],
    itemHeight: number,
    imageHeight: number,
    titleFontSize: number,
    onSelectItem: (id: string) => void
): JSX.Element => {
    const renderItem: ListRenderItem<ResultItem> = ({ item, index }) => {
        return (
            <View
                style={[
                    styles.square,
                    itemHeight ? { height: length_factor * itemHeight } : null,
                    index % 2 == 0 ? { marginRight: 8.5 * length_factor } : { marginLeft: 8.5 * length_factor }
                ]}
            >
                <TouchableOpacity style={styles.results_button} onPress={() => onSelectItem(item.id)}>
                    <Image
                        source={{ uri: item.image }}
                        style={[styles.image, imageHeight ? { height: imageHeight * length_factor } : null]}
                    />
                    <View style={styles.title_container}>
                        <Text
                            style={[
                                styles.result_title,
                                titleFontSize ? { fontSize: titleFontSize * length_factor } : null
                            ]}
                            numberOfLines={2}
                        >
                            {item.title}
                        </Text>
                    </View>
                    {item.description ? (
                        <Text style={[commonStyles.text, { paddingLeft: 8 * length_factor }]} numberOfLines={1}>
                            {item.description}
                        </Text>
                    ) : null}
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <FlatList
            style={{ height: "100%", alignContent: "flex-start", display: "flex" }}
            data={results}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            ItemSeparatorComponent={renderSeparator}
            columnWrapperStyle={styles.row}
        />
    )
}
