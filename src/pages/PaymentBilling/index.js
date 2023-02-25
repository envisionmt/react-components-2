import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { Loader } from '../../components/Loader';
import PaymentBillingForm from './PaymentBillingForm';
import ContentHeader from '../../components/Layouts/Account/AccountContentHeader';
import { Table, TableHead, TableBody, TableRow, HeaderCell, BodyCell } from '../../components/Table';

import { fetchUser } from '../../store/user/actions';

const RootWrapper = styled.div`
  width: 768px;
  background: #111111;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px;
`;

const ContentHeaderLine = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const PaymentInfoWrapper = styled.div`
  width: 100%;
`;

const BillingTableWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
`;
const BillingTable = styled.div`
  width: 100%;
`;

const data = [
  { id: 1, date: 'HR', type: '88', total: '65' },
  { id: 2, date: 'HR', type: '88', total: '65' },
  { id: 3, date: 'HR', type: '88', total: '65' },
  { id: 4, date: 'HR', type: '88', total: '65' },
];

export default function PaymentBilling() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const subscription = useSelector((state) => state.subscription);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.data?.user?.id && !subscription.loading) {
      setLoading(false);
    }
  }, [user, subscription]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUser());
    };
    fetchData();
  }, []);

  return (
    <RootWrapper>
      {loading && <Loader color="white" />}
      {!loading && (
        <>
          <ContentHeader title="Payment & Billing" />
          <ContentWrapper>
            <PaymentInfoWrapper>
              <ContentHeaderLine>Update your credit or debit card info</ContentHeaderLine>
              <PaymentBillingForm pageType="paymentBilling" />
            </PaymentInfoWrapper>
            <BillingTableWrapper>
              <ContentHeaderLine>Billing & Order history</ContentHeaderLine>
              <BillingTable>
                <Table>
                  <TableHead background="#222222">
                    <TableRow>
                      <HeaderCell>Order ID</HeaderCell>
                      <HeaderCell>Date</HeaderCell>
                      <HeaderCell>Type</HeaderCell>
                      <HeaderCell>Total</HeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((item) => (
                      <TableRow key={item.id}>
                        <BodyCell>{item.id}</BodyCell>
                        <BodyCell>{item.date}</BodyCell>
                        <BodyCell>{item.type}</BodyCell>
                        <BodyCell>{item.total}</BodyCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </BillingTable>
            </BillingTableWrapper>
          </ContentWrapper>
        </>
      )}
    </RootWrapper>
  );
}
