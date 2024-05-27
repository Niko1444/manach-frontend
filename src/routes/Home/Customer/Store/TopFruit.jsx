import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import ExploreFruit from '../../../../components/ExploreFruit/ExploreFruit';
import ExploreSupplier from '../../../../components/ExploreSupplier/ExploreSupplier';
import Daily from '../../../../components/DailyDeals/DailyDeals';
import TopFruitBanana from './TopFruitBanana';
import TopFruitMango from './TopFruitMango';
import TopFruitPineapple from './TopFruitPineapple';
import TopFruitCoconut from './TopFruitCoconut';
import TopFruitPapaya from './TopFruitPapaya';
import TopFruitDurian from './TopFruitDurian';
import TopFruitBerries from './TopFruitBerries';

const TopFruit = () => {
    const navigate = useNavigate();

    const handleBananaClick = () => {
        navigate('/banana-store');
    };

    const handleMangoClick = () => {
        navigate('/mango-store');
    };

    const handlePineappleClick = () => {
        navigate('/pineapple-store');
    };

    const handleCoconutClick = () => {
        navigate('/coconut-store');
    };

    const handlePapayaClick = () => {
        navigate('/papaya-store');
    };

    const handleDurianClick = () => {
        navigate('/durian-store')
    };

    const handleBerriesClick = () => {
        navigate('/berries-store')
    };

    return (
        <div>
            <div className="flex">
                <div className="w-full justify-between p-16">
                    <div
                        style={{
                            color: '#485935',
                            fontSize: 28,
                            fontFamily: 'Poppins',
                            fontWeight: '800',
                            wordWrap: 'break-word',
                        }}
                    >
                        Top Fruits
                    </div>
                    <div
                        style={{
                            color: '#93A267',
                            fontSize: 20,
                            fontFamily: 'Poppins',
                            fontWeight: '300',
                            wordWrap: 'break-word',
                        }}
                    >
                        From top brands
                    </div>
                </div>
                <SearchBar />
            </div>
            <div className="flex">
                <div style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(2, 1fr)',
							gap: '8px',
							marginLeft: '5px',
						}}>
                    <div onClick={handleBananaClick}>
                        <TopFruitBanana />
                    </div>
                    <div onClick={handleMangoClick}>
                        <TopFruitMango />
                    </div>
                    <div onClick={handlePineappleClick}>
                        <TopFruitPineapple />
                    </div>
                    <div onClick={handleCoconutClick}>
                        <TopFruitCoconut />
                    </div>
                    <div onClick={handlePapayaClick}>
                        <TopFruitPapaya />
                    </div>
                    <div onClick={handleDurianClick}>
                        <TopFruitDurian />
                    </div>
                    <div onClick={handleBerriesClick}>
                        <TopFruitBerries />
                    </div>
                </div>

                <div className="ml-[80px]">
                    <div className="mt-4 flex justify-end">
                        <div className="w-full max-w-64 space-y-4">
                            <ExploreFruit />
                            <ExploreSupplier />
                            <Daily />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFruit;