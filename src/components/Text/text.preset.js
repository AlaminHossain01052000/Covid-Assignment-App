import { colors } from "../../theme/colors"
import { typography } from "../../theme/typography"
export const presets={
    default:{
        fontSize:14,
        fontFamily:typography.primary,
        color:colors.white
    },
    
    h1:{
        fontSize:24,
        fontFamily:typography.bold,
        color:colors.white
    },
    h2:{
        fontSize:20,
        fontFamily:typography.bold,
        color:colors.white
    },
    h3:{
        fontSize:18,
        fontFamily:typography.bold,
        color:colors.white
    },
    h4:{
        fontSize:20,
        fontFamily:typography.secondary,
        color:colors.black
    },
    h5:{
        fontSize:14,
        fontFamily:typography.secondary,
        color:colors.black,
        textAlign:'center'
    },
    p:{
        fontSize:14,
        color:colors.white,
        fontFamily:typography.primary
    },
    small:{
        fontSize:16,
        color:colors.white,
        fontFamily:typography.secondary
    }

}