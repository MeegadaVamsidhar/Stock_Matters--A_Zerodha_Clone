import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test('renders hero heading', () => {
        render(<Hero />);
        const heading = screen.getByText('Invest in everything');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('fs-1');
    });

    test('renders hero description', () => {
        render(<Hero />);
        const paragraph = screen.getByText(/Online platform to invest in stocks/i);
        expect(paragraph).toBeInTheDocument();
    });

    test('renders sign up button', () => {
        render(<Hero />);
        const signupBtn = screen.getByRole('link', { name: /Sign up for free/i });
        expect(signupBtn).toBeInTheDocument();
        expect(signupBtn).toHaveAttribute('href', '/signup');
    });
});