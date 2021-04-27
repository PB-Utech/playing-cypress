select iu.order_no, vb.product_no, vb.product_qty, vb.product_unit, vb.customer_name from vact_prep_order_to_booking as vb

left join act_trn_order_input_upload as iu on iu.order_id = vb.order_id

where
	vb.order_Id
in (
	select order_id from act_trn_order_input_upload  where order_no = 'ORD202104270001'
)


SELECT *
	FROM public.act_trn_inventory_balance as ib
	
where product_no in (
	select vb.product_no from vact_prep_order_to_booking as vb
	where
		vb.order_Id
	in 
		(
			select order_id from act_trn_order_input_upload  where order_no = 'ORD202104270001'
		)
)
and ib.customer_name in (
	select vb.customer_name from vact_prep_order_to_booking as vb

	left join act_trn_order_input_upload as iu on iu.order_id = vb.order_id

	where
		vb.order_Id
	in (
		select order_id from act_trn_order_input_upload  where order_no = 'ORD202104270001'
	)
)
and ib.inventory_qty >0
and product_status_id =1
and ib.customer_id = 1

order by ib.created_date asc