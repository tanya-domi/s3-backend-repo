# you reference the bucket as key and it return the value
output "s3_name" {
  value = "aws_s3_bucket.backend[0].bucket"
}
