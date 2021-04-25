import {StatusBar, SafeAreaView, FlatList,Dimensions} from 'react-native'
import styled from 'styled-components/native'


const widthDimension = Dimensions.get('window').width; 
const toHalfPxWidth = (widthDimension) => (
  widthDimension/2
)


export const Title = styled.Text`
font-size: 20px;
font-weight: bold;
`;

export const TileCover = styled.Image`
resize-mode: cover;
height: 100px;
`;

export const Row = styled.View`
flex-direction: row;
align-content: space-around;

`;

export const Paragraph = styled.Text`
font-size: 12px;
align-self: center;

`;

export const Spaces = styled.View`
margin: 10px;
`;

export const SubTitle = styled.Text`
font-size: 16px;
align-items: flex-end;
`;

export const End = styled.View`

`;

export const Tile = styled.View`
background-color: white;
border-radius: 8px;
margin: 10px;


align-items: flex-start;
overflow: hidden;
shadowColor: "#000",
shadowOffset:{
width: 0,
height: 6,
};
shadowOpacity: 0.39;
shadowRadius: 8.30;
elevation: 13;
`;

export const Button = styled.TouchableOpacity`
width: 60px;
height: 15px;
background-color:#15ABFF;
border-radius: 15px;
`

export const ModalButton = styled.TouchableOpacity`
width: 60px;
height: 15px;
background-color:#15ABFF;
border-radius: 15px;
`

export const LightBlueBackgound = styled.View`
background-color: #AADFFE;
justify-content: center;

`;

export const HomeHeading = styled.Text`
font-size: 30px;
font-weight: bold;
padding-bottom: 10px;
width: 150px;
`;

export const WhiteBackground = styled.View`
background-color: #FFFFFF;
justify-content: center;
padding-left:20px;
padding-bottom: 50px;

`;

export const DarkGrayBackground = styled.View`
background-color: #2E2E2E;
justify-content: center;
padding-left:20px;


`;

export const BlackBackground = styled.View`
background-color: #000000;
height: 300px;
justify-content: center;
padding: 20px;
padding-bottom: 50px;

`;

export const FeaturedCover = styled.ImageBackground`
width: 331px;
height: 222px;
`;

export const FeaturedTile = styled.View`
height: 221px;
width: 331px;
border-radius: 14px;
overflow: hidden;

`
export const TintBlack = styled.View`

`;

export const RenderHorizontalList = styled(FlatList).attrs({
    contentContainerStyle: {
    paddingBottom: 30,
    paddingLeft:20,
    },
  })``;

export const YellowBackground = styled.View`
background-color: #FBF0AB;
justify-content: center;

`;

export const Header = styled.View`
height: 70px;
overflow: hidden;
justify-content: center;
background-color: white;
`

export const Icon = styled.Image`
resize-mode: center;
align-self:center;

`