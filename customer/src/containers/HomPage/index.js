import React, { useEffect } from 'react'
import { LayoutCustomer } from '../../components/Layout'
import { MainSearch } from '../../components/MainSearch'
import { useDispatch } from 'react-redux'
import { getAll } from '../../action/route';

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
            
        </div>


    )

}