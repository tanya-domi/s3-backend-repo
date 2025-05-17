variable "env" {
  type    = string
  #default = "dev"
}

variable "region" {
  type    = string
  #default = "eu-north-1"
}

variable "versioning" {
  type    = string
  default = "Enabled"
}

variable "create_vpc" {
  type    = bool
  default = true
}
##