provider "aws" {
    region = "us-east-1"
    access_key = "test"
    secret_key = "test"
    s3_use_path_style = true
    endpoints {
      s3 = "http://localhost:4566"
      sts = "http://localhost:4566"
    }
}

variable "bucket_prefix" {
  description = "Prefix for the S3 bucket name"
  type = string
  default = "testing-bucket"
}

resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "testing_bucket" {
  bucket = "${var.bucket_prefix}-${random_id.bucket_suffix.hex}"
}