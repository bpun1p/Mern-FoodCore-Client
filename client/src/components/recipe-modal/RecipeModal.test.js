import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import RecipeModal from './RecipeModal';

const mocktogglePopUp = jest.fn();
const mockRecipe = {
    author: "Madeline",
    title : "Triple Chocolate Chunk Cookies",
    description : "Large or small, these triple chocolate cookies are crispy on the outside and chewy on the inside. Refrigerating the batter for 48 hours before baking is ideal, as this allows the dough to fully form its flavor.",
    img: 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',
    ingredients: [ 
        "¾ cup brown sugar",
        "½ cup unsalted butter, at room temperature",
        "½ cup white sugar",
        "1 teaspoon salt",
        "1 teaspoon vanilla extract",
        "1 ½ cups all-purpose flour",
        "¾ teaspoon baking soda",
        "1 cup milk chocolate chips",
        "1 (3 ounce) bar dark chocolate, cut into chunks",
        "3 tablespoons white chocolate chips"
    ],
    instructions: [
        "Combine brown sugar, butter, white sugar, and salt in a large bowl; beat with an electric mixer until a creamy, deep brown mixture forms. Add egg and vanilla; beat until mixture lightens and becomes smooth, 10 to 15 seconds.",
        "Mix flour and baking soda together in a separate bowl. Add slowly to the wet ingredients until mostly incorporated, but some white traces of flour remain. Fold in milk chocolate, dark chocolate, and white chocolate using a spatula, not the mixer. Cover the dough and refrigerate for at least 30 minutes, or up to 48 hours.",
        "Preheat the oven to 350 degrees F (175 degrees C) when ready to bake.",
        "Divide cold dough into 2 1/4-ounce portions and place on a cookie sheet.",
        "Bake in the preheated oven until the edges start to look golden brown and crispy, 10 to 12 minutes. Do not overbake; the centers will not look fully done. Cool until cookies are set, about 30 minutes."
    ]
};

test('renders the correct content', () => {
    const { getByText, getByTestId } = render(<RecipeModal recipe={mockRecipe} togglePopUp={mocktogglePopUp}/>)

    expect(getByTestId('exit-modal-btn')).not.toBeNull();
    expect(getByTestId('recipe-image')).toHaveAttribute('src', 'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg');
    expect(getByText('Triple Chocolate Chunk Cookies')).toBeInTheDocument();
    expect(getByText('Large or small, these triple chocolate cookies are crispy on the outside and chewy on the inside. Refrigerating the batter for 48 hours before baking is ideal, as this allows the dough to fully form its flavor.')).toBeInTheDocument();
    expect(getByText('½ cup unsalted butter, at room temperature')).toBeInTheDocument();
    expect(getByText('Preheat the oven to 350 degrees F (175 degrees C) when ready to bake.')).toBeInTheDocument();
});
test('user clicks the exit modal button should null everything', () => {
    const { getByTestId } = render(<RecipeModal recipe={mockRecipe} togglePopUp={mocktogglePopUp}/>)

    fireEvent.click(getByTestId('exit-modal-btn'));

    expect(mocktogglePopUp).toHaveBeenCalled();
});