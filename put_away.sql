/*IN ONE QUERY*/
SELECT 
upload_service.order_no, 
unload.product_no, 
unload.revise_unit_desc, 
CASE WHEN split_lot_flag = 'Y' THEN split_log.split_qty::integer else unload.revise_qty::integer end as QTY,
concat('',split_log.lot_no) as lotno,
concat('',split_log.serial_no) as serialno,
concat(upload_service.order_no,';',unload.product_no,';',split_log.lot_no,';',split_log.serial_no) as qr_product,
unload.revise_qty::integer as unload_qty, 
split_log.split_qty::integer as split_qty,
unload.product_status_desc

from act_trn_whop_unload as unload

LEFT JOIN act_trn_whop_unload_split_log as split_log
ON unload.unload_id = split_log.unload_id

LEFT JOIN act_trn_order_input_upload_service as upload_service
ON unload.order_id = upload_service.order_id
where unload.order_Id
in (
	select order_id from act_trn_order_input_upload as iu where order_no = 'ORD202105260007'
)
order by product_no

/**************************************/
/* SEPARATE Query Split and Not-Split */

select 
upload_service.order_no, 
unload.product_no, 
unload.revise_unit_desc, 
split_log.split_qty::integer,
split_log.lot_no, 
split_log.serial_no,
concat(upload_service.order_no,';',unload.product_no,';',split_log.lot_no,';',split_log.serial_no) as qr_product

from act_trn_whop_unload as unload

LEFT JOIN act_trn_whop_unload_split_log as split_log
ON unload.unload_id = split_log.unload_id

LEFT JOIN act_trn_order_input_upload_service as upload_service
ON unload.order_id = upload_service.order_id
where unload.order_Id
in (
	select order_id from act_trn_order_input_upload as iu where order_no = 'ORD202104250004'
) and split_lot_flag = 'Y'
order by product_no



select 
upload_service.order_no, unload.product_no, 
unload.revise_unit_desc, unload.revise_qty::integer,
unload.lot_no,
concat(upload_service.order_no,';',unload.product_no,';',unload.lot_no,';') as qr_product

from act_trn_whop_unload as unload

LEFT JOIN act_trn_order_input_upload_service as upload_service
ON unload.order_id = upload_service.order_id

where unload.order_Id
in (
	select order_id from act_trn_order_input_upload where order_no = 'ORD202104200001'
) and split_lot_flag = 'N'
order by product_no