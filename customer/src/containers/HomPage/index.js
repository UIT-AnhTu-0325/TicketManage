import React, { useEffect } from 'react'
import { LayoutCustomer } from '../../components/Layout'
import { MainSearch } from '../../components/MainSearch'
import { useDispatch } from 'react-redux'
import { getAll } from '../../action/route';
import { MainContent } from '../../components/MainSearchComponents/MainContent';
import { Footer } from '../../components/Footer';

/**
* @author
* @function HomePage
**/

export const HomePage = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    },[]);
    return (
        <div>
            <LayoutCustomer>

            </LayoutCustomer>

            <MainSearch>

            </MainSearch>

            <MainContent />

            <Footer />
            
        </div>


    )

}