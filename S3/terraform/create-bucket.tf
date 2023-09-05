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

resource "aws_s3_bucket" "testing_bucket" {
    bucket = "my-first-testing-bucket"
}