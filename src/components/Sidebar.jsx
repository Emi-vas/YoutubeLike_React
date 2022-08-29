import { Stack } from "@mui/material"
import { categories, colors } from "../utils/constants";

const selectedCategory = 'New'

const Sidebar = () => (
    <Stack
        direction="row"
        sx={{
            overflowY: 'scroll',
            height: { sx: "auto", md: "95%"},
            flexDirection: { md: "column" },
        }}
    >
        {
            categories.map((categorie) => (
                <button
                    className="category-btn"
                    style={{
                        background: categorie.name == selectedCategory && colors.red,
                        color: "white"
                    }}
                    key={categorie.name}
                >
                    <span 
                        style={{
                            color: categorie.name === selectedCategory ? "white" : colors.red,
                            marginRight: "15px"
                        }}
                    >{categorie.icon}</span>

                    <span
                        style={{ opacity: categorie.name === selectedCategory ? '1' : '0.8' }}
                    >{categorie.name}</span>
                </button>
            ))
        }

    </Stack>
)

export default Sidebar;