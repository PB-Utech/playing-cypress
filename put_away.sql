select 
upload_service.order_no, unload.product_no, 
unload.revise_unit_desc, unload.revise_qty,
split_log.lot_no, split_log.serial_no
from act_trn_whop_unload as unload

LEFT JOIN act_trn_whop_unload_split_log as split_log
ON unload.unload_id = split_log.unload_id

LEFT JOIN act_trn_order_input_upload_service as upload_service
ON unload.order_id = upload_service.order_id
where unload.order_Id
in (
	select order_id from act_trn_order_input_upload as iu where order_no = 'ORD202104200001'
) and split_lot_flag = 'Y'




select 
upload_service.order_no, unload.product_no, 
unload.revise_unit_desc, unload.revise_qty,
unload.lot_no
from act_trn_whop_unload as unload

LEFT JOIN act_trn_order_input_upload_service as upload_service
ON unload.order_id = upload_service.order_id

where unload.order_Id
in (
	select order_id from act_trn_order_input_upload where order_no = 'ORD202104200001'
) and split_lot_flag = 'N'
order by product_no