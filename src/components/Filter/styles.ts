import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterStyleProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    width: 70px;
    height: 38px;

    align-items: center;
    justify-content: center;
    margin-right: 12px;
    margin-bottom: 10px;

    border-radius: 4px;

    ${({ theme, isActive }) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `}
`

export const Title = styled.Text`
    text-transform: uppercase;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
    `}
`