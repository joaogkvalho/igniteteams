import { UsersThree } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;

    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;
`


export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
    `}
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    weight: "fill",
    size: 32,
    color: theme.COLORS.GREEN_700
}))`
    margin-right: 20px;
`