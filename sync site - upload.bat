aws s3 sync "%cd%" s3://jordanrifaey.com --delete
aws s3 cp --content-type text/html --acl public-read s3://jordanrifaey.com/resume s3://jordanrifaey.com/resume --metadata-directive REPLACE