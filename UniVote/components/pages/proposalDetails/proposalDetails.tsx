import React from "react"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import { styles as proposalDetailStyles } from "./style"
import { styles } from "../../shared/styles/styles"
import BlueHeader from "../../shared/components/blueHeader/blueHeader"
import Menu from "../../shared/components/menu/menu"
import Button from "../../shared/components/button/button"
import { BUTTON_COLORS } from "../../shared/components/button/button"
import { NavigationProps } from "../../shared/types"
import { MenuContainer, MainContainer } from "../../shared/components/containers/containers"

export default function ProposalDetailsScreen({ navigation }: NavigationProps): JSX.Element {
    const number_of_votes: number = 16
    const title: string = "Fix pothole on Library Road"
    const details: string =
        "Potholes really need to be fixed very soon. Otherwise all the cars will be destroyed and the council will be sued"
    const comments: comment[] = [
        { user: "marc", comment: "this really sucks" },
        { user: "bob", comment: "yes i agree. its very bad" },
        {
            user: "mary",
            comment: "when will it get fixed? Some more textto see if i can get it to wrap onto a new line"
        }
    ]
    const onVote = () => console.log("vote")
    return (
        <View style={styles.centered_container}>
            <BlueHeader title={"Proposal Details"} navigation={navigation} showArrow={true} />
            <SafeAreaView style={[styles.centered_container, { width: "100%", justifyContent: "flex-start" }]}>
                <MainContainer>
                    <View style={proposalDetailStyles.image_container}>
                        <Image
                            source={require("../../../assets/example_img.png")}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>
                    <View style={[styles.screen_padding, proposalDetailStyles.content_container]}>
                        <Text style={proposalDetailStyles.text}>{number_of_votes} Current Number of Votes</Text>

                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                        >
                            <Text style={proposalDetailStyles.text}>{title}</Text>
                        </ScrollView>
                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.title_container]}
                        >
                            <Text style={proposalDetailStyles.text}>{details}</Text>
                        </ScrollView>

                        <Button
                            text="VOTE"
                            flexBasis={124}
                            color={BUTTON_COLORS.BLUE}
                            onPress={onVote}
                            showPlusIcon={true}
                            paddingTop={15}
                        />

                        <Text style={proposalDetailStyles.text}>Comments</Text>
                        <ScrollView
                            contentContainerStyle={{
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap"
                            }}
                            style={[proposalDetailStyles.scroll_view_container, proposalDetailStyles.comment_container]}
                        >
                            {renderComments(comments)}
                        </ScrollView>
                    </View>
                </MainContainer>
                <MenuContainer>
                    <Menu navigation={navigation} />
                </MenuContainer>
            </SafeAreaView>
        </View>
    )
}

interface comment {
    user: string
    comment: string
}

const renderComments = (comments: comment[]): JSX.Element[] => {
    console.log(comments)

    return comments.map((item, i) => {
        return (
            <React.Fragment>
                <Text style={proposalDetailStyles.text} key={i}>
                    {item.user}... {item.comment}
                </Text>
                <View style={{ width: "100%", height: 20 }}></View>
            </React.Fragment>
        )
    })
}
